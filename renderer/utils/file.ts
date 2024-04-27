/**
 *  @description  Save and load local file via fs:node
 *  @param  file
 *  @param  fileName
 *  @param  path
 */
import { ipcRenderer } from 'electron'


/*export async function uploadFile(file: File | Blob): Promise<string> {
  const reader = new FileReader()
  reader.readAsText(file)

  return new Promise<string>((resolve, reject) => {
    reader.onload = async () => {
      const fileContent = reader.result as string
      try {
        const response = await ipcRenderer.invoke('file-upload', fileContent)
        resolve(response)
      } catch (error) {
        reject(error)
      }
    };

    reader.onerror = () => {
      reject(reader.error)
    };
  });
}

export async function downloadFile(fileName: string, filePath: string, file: File | string): Promise<string> {
  try {
    const response = await ipcRenderer.invoke('file-download', fileName)
    return response
  } catch (error) {
    throw error
  }
}*/

export const userDownload = async (file: File | any, fileName: string) => {
  // TODO Feature: Encryption & Compress Binary File.
  const anchor = document.createElement('a');
  // const encodedFileName = encodeURIComponent(fileName)
  anchor.setAttribute('href', file);
  anchor.setAttribute('download', fileName);
  anchor.click();
  anchor.remove();
}