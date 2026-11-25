import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'SUA_API_KEY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'petshop-do-toto.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'petshop-do-toto',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'petshop-do-toto.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:000000000000:web:000000000000',
}

const isFirebaseConfigured =
  firebaseConfig.apiKey !== 'SUA_API_KEY' && Boolean(firebaseConfig.apiKey)

let db = null
if (isFirebaseConfigured) {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
}

const STORAGE_KEY = 'petshop_toto_agendamentos_db'

const dadosIniciais = [
  { id: 'ag-1', tutor: 'Maria Oliveira', pet: 'Thor', servico: 'Banho e tosa' },
  { id: 'ag-2', tutor: 'João Pedro', pet: 'Luna', servico: 'Consulta veterinária' },
]

function lerBancoLocal() {
  const salvo = localStorage.getItem(STORAGE_KEY)
  if (!salvo) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosIniciais))
    return dadosIniciais
  }
  return JSON.parse(salvo)
}

export async function listarAgendamentos() {
  if (isFirebaseConfigured && db) {
    const querySnapshot = await getDocs(collection(db, 'agendamentos'))
    return querySnapshot.docs.map((documento) => ({
      id: documento.id,
      ...documento.data(),
    }))
  }
  return lerBancoLocal()
}

export async function salvarAgendamento(novoAgendamento) {
  if (isFirebaseConfigured && db) {
    const docRef = await addDoc(collection(db, 'agendamentos'), novoAgendamento)
    return { id: docRef.id, ...novoAgendamento }
  }
  const listaAtual = lerBancoLocal()
  const registroComId = { id: 'ag-' + Date.now(), ...novoAgendamento }
  localStorage.setItem(STORAGE_KEY, JSON.stringify([registroComId, ...listaAtual]))
  return registroComId
}

export async function excluirAgendamento(id) {
  if (isFirebaseConfigured && db) {
    await deleteDoc(doc(db, 'agendamentos', id))
    return
  }
  const listaAtual = lerBancoLocal()
  const novaLista = listaAtual.filter((item) => item.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista))
}
