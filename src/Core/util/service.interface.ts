export default interface IService<T, P> {
    execute: (params?: P) => Promise<T | null>
}