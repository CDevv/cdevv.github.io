import db from "../../firebase.server"
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { blogConverter } from "$lib/converters";

export async function getBlogs() {
    const blogsCollection = collection(db, "blogs").withConverter(blogConverter);
    const blogsSnapshot = await getDocs(blogsCollection);
    const blogsList = blogsSnapshot.docs.map((b) => {
        const data = b.data();
        data.id = b.id;
        return data;
    });
    return blogsList;
}

export async function getBlog(id:number) {
    const blogReference = doc(db, `blogs/${id}`).withConverter(blogConverter);
    const blogSnapshot = await getDoc(blogReference);
    const blog = blogSnapshot.data();
    return blog;
}