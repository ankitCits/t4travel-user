import { writeStorage, readStorage, removeAllStorage, removeStorage } from './asyncStorage'
// Access Token
export const setAccessToken = async value => {
    return (promise = new Promise(function (resolve) {
        resolve(writeStorage('ACCESS_TOKEN', value))
    }))
}

export const getAccessToken = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(readStorage('ACCESS_TOKEN'))
    }))
}

export const removeAccessToken = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(removeStorage('ACCESS_TOKEN'))
    }))
}



// Set Email
export const setEmailS = async value => {
    return (promise = new Promise(function (resolve) {
        resolve(writeStorage('EMAIL_', value))
    }))
}

export const getEmail = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(readStorage('EMAIL_'))
    }))
}

export const removeEmail = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(removeStorage('EMAIL_'))
    }))
}



// Set Message
export const setMsg = async value => {
    return (promise = new Promise(function (resolve) {
        resolve(writeStorage('MAS__', value))
    }))
}

export const getMsg = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(readStorage('MAS__'))
    }))
}

export const removeMsg = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(removeStorage('MAS__'))
    }))
}


// UserFcmToken
export const setFcmToken = async value => {
    return (promise = new Promise(function (resolve) {
      resolve(writeStorage('FCM_TOKEN', value))
    }))
  }
  
  export const getFcmToken = async () => {
    return (promise = new Promise(function (resolve) {
      resolve(readStorage('FCM_TOKEN'))
    }))
  }
  
  export const removeFcmToken = async () => {
    return (promise = new Promise(function (resolve) {
      resolve(removeStorage('FCM_TOKEN'))
    }))
  }
  
  
  // NotificationData
  export const setNotificationData = async value => {
      return (promise = new Promise(function (resolve) {
        resolve(writeStorage('NOTIFICATION_DATA', value))
      }))
    }
    
    export const getNotificationData = async () => {
      return (promise = new Promise(function (resolve) {
        resolve(readStorage('NOTIFICATION_DATA'))
      }))
    }
    
    export const removeNotificationData = async () => {
      return (promise = new Promise(function (resolve) {
        resolve(removeStorage('NOTIFICATION_DATA'))
      }))
    }
  
  
    // Access Token
  export const setAccessToken_Notification = async value => {
      return (promise = new Promise(function (resolve) {
        resolve(writeStorage('ACCESS_TOKEN_NOTIFICATION', value))
      }))
    }
    
    export const getAccessToken_Notification = async () => {
      return (promise = new Promise(function (resolve) {
        resolve(readStorage('ACCESS_TOKEN_NOTIFICATION'))
      }))
    }
    
    export const removeAccessToken_Notification = async () => {
      return (promise = new Promise(function (resolve) {
        resolve(removeStorage('ACCESS_TOKEN_NOTIFICATION'))
      }))
    }