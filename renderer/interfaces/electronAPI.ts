export interface IElectronAPI {
  // asyncPing: () => void
  // syncPing: () => string
  // handlePing: () => Promise<string>
  // handlePingWithError: () => Promise<string>
  message: () => void
  inspectElement: () => void
}