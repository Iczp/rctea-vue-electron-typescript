export interface AxiosInterceptorManager<T> {
    use(resolved: IResolvedFn<T>, rejected?: IRejectedFn): number

    eject(id: number): void
}

export interface IResolvedFn<T = any> {
    (val: T): T | Promise<T>
}

export interface IRejectedFn {
    (error: any): any
}
/**
 * asdfasf
 */
export interface Interceptor<T> {
    resolved: IResolvedFn<T>
    rejected?: IRejectedFn
}
