import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

// Web app config is public by design; access is controlled by firestore.rules.
const firebaseConfig = {
  apiKey: "AIzaSyDgZZGPgdUyo65AU9CnJ3e4YUqZeoxf-rE",
  authDomain: "portifolio-flavio-3273e.firebaseapp.com",
  projectId: "portifolio-flavio-3273e",
  storageBucket: "portifolio-flavio-3273e.firebasestorage.app",
  messagingSenderId: "40471809519",
  appId: "1:40471809519:web:dff39da2da513c842dfa1a",
  measurementId: "G-NK1T27X2CY",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let analyticsPromise: Promise<Analytics | null> | null = null;

function analytics() {
  if (typeof window === "undefined") return Promise.resolve(null);
  analyticsPromise ??= isSupported()
    .then((ok) => (ok ? getAnalytics(app) : null))
    .catch(() => null);
  return analyticsPromise;
}

export function initAnalytics() {
  void analytics();
}

export function track(event: string, params?: Record<string, string>) {
  void analytics().then((a) => {
    if (a) logEvent(a, event, params);
  });
}

export type ContactMessage = {
  name: string;
  contact: string;
  type: string;
  message: string;
};

export async function sendContactMessage(data: ContactMessage) {
  await addDoc(collection(getFirestore(app), "contatos"), {
    ...data,
    page: window.location.href,
    createdAt: serverTimestamp(),
  });
  track("contact_submit", { type: data.type });
}
