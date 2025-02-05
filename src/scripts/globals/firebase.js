import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

import CONFIG from './config';

class Firebase {
  static initializeFirebase() {
    const app = initializeApp(CONFIG);
    const db = getDatabase(app);
    const patriotDb = ref(db, 'Mypetriot/' + '/Pahlawan');
    return patriotDb;
  }
}

export default Firebase;
