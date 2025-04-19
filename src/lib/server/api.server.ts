import db from "../../firebase.server"
import { collection, getDocs } from "firebase/firestore";

export async function getProjects() {
    const projectsCollection = collection(db, 'projects');
    const projectsSnapshop = await getDocs(projectsCollection);
    const projectsList = projectsSnapshop.docs.map(doc => doc.data());
    return projectsList;
}