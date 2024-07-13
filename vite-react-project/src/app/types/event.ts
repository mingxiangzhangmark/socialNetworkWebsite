export type AppEvent = {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    city: string;
    venue: string;
    hostedBy: string;
    hostUid: string;
    hostPhotoURL: string;
    isCancelled: boolean;
    attendees: Attendee[];
    attendeeIds: string[];
    isHost?: boolean;
    isGoing?: boolean;
}

export type Attendee = {
    id: string;
    displayName: string;
    photoURL: string;
}

export type ChatComment = {
    id: string;
    text: string;
    date: string | number;
    uid: string;
    displayName: string;
    photoURL: string;
    parentId: string | null;
    childNodes : ChatComment[]
}