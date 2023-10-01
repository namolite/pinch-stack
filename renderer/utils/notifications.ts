// TODO Feature: notifications off
const mute = () => {
  let importClientSetting: object = {}
}

// TODO Feature: notification output function
const notification = (notificationTitle: string, notificationBody: string, terminalMessage: string) => {
  return () => {
    // const tt = 'Your change has already saved'
    // const bd = 'Notification from the Renderer process'
    // const msg = 'Pinch Stack'
    new window.Notification(notificationTitle, { body: notificationBody })
    // .onclick = () => { document.getElementById('output').innerText = terminalMessage }
  }
}

export default notification
