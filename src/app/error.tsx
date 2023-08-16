"use client";
// ! "use client"; is used to declare that this is a client component.
// ! need to be on the top most

import { Button } from "react-bootstrap";

interface ErrorPageProps {
    error: Error;
    reset: () => void; // <-- the name 'reset' is required be next.js
}

export default function Error({ error, reset }: ErrorPageProps) {
    return (
        <div>
            <h1>Error 😖</h1>
            <p>something went wrong... </p>
            <Button onClick={reset}>Try again</Button>
        </div>
    );
}
