export default (req: Request) => `Hello world (${req.url.slice(1)}) (Generated at ${new Date().toISOString()})`
