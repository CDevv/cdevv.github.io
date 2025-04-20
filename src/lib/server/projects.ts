import db from "../../firebase.server"
import { collection, getDocs } from "firebase/firestore";
import { projectConverter } from "$lib/converters";

export async function getProjects() {
    const projectsCollection = collection(db, 'projects').withConverter(projectConverter);
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsList = projectsSnapshot.docs.map(doc => doc.data());
    return projectsList;
}