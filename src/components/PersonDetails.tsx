
export interface PersonDetailsProps {
    firstName: string;
    lastName: string;
}

export function PersonDetails(props: PersonDetailsProps){
    return <h3>{props.firstName} {props.lastName}</h3>
}