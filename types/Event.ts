export interface Event {
    id: string; // uuid
    title: string;
    event_type: string;
    time: string; // timestamp
    place: string;
    content: string;
    image_url: string;
}