export interface UserI {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    phone: string;
    email: string;
    age: number;
    image: string;
    company: {
        address: {
            address: string;
            city: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            postalCode: string;
            state: string;
        };
        department: string;
        name: string;
        title: string;
    };
    domain: string;
};

export interface UserDataI {
    users: UserI[];
    total: number;
    skip: number;
    limit: number;
};