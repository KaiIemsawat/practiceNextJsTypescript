export default async function Page() {
    // The next line is only for loading page testing purpose
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // The next line is only for error page testing purpose
    // throw Error("Error, for real!!!");
    return <div>Hello, this is a test</div>;
}
