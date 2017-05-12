// a library to wrap and simplify api calls
import {create} from 'apisauce'

const serviceUrl = create({
  baseURL: 'https://jobs.github.com/'
})

export const api = {

  getjob() {
    return serviceUrl.get('positions.json', {})
  },
}
