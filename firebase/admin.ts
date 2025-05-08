import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// This file should only be imported in server components or API routes
// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
    // Only initialize on server
    if (typeof window === 'undefined') {
        const apps = getApps();

        if (!apps.length) {
            initializeApp({
                credential: cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    // Replace newlines in the private key
                    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                }),
            });
        }

        return {
            auth: getAuth(),
            db: getFirestore(),
        };
    }
    
    // Return empty objects for type safety if somehow imported on client
    return {
        auth: {} as ReturnType<typeof getAuth>,
        db: {} as ReturnType<typeof getFirestore>,
    };
}

export const { auth, db } = initFirebaseAdmin();