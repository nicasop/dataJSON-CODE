export interface Profession {
    id:        number;
    name:      string;
    photo:     string;
    address:   string;
    email:     string;
    profesion: string;
    contact:   Contact;
    social:    Social;
}

export interface Contact {
    home:     string;
    personal: string;
}

export interface Social {
    facebook: string;
    twitter:  string;
    linkedin: string;
}