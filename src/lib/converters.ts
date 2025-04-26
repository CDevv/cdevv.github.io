import type { Project, Blog } from "./types";
import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from "firebase/firestore";

const projectConverter: FirestoreDataConverter<Project> = {
    toFirestore: function (modelObject: WithFieldValue<Project>): WithFieldValue<DocumentData> {
        throw new Error("Function not implemented.");
    },
    fromFirestore: function (snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>, options?: SnapshotOptions): Project {
        let data = snapshot.data(options);
        return {
            name: data.name,
            description: data.desc,
            tags: data.tags,
            github: data.github,
            itchio: data.itchio
        }
    }
}

const blogConverter: FirestoreDataConverter<Blog> = {
    toFirestore: function (modelObject: WithFieldValue<Blog>): WithFieldValue<DocumentData> {
        throw new Error("Function not implemented.");
    },
    fromFirestore: function (snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>, options?: SnapshotOptions): Blog {
        let data = snapshot.data(options);
        return {
            id: data.id,
            title: data.title,
            content: data.content,
            datetime: new Date(data.datetime).toDateString(),
            tags: data.tags
        }
    }
}

export { projectConverter, blogConverter }