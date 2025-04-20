import type { Project } from "./types";
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
            github: data.github
        }
    }
}

export { projectConverter }