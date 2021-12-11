import { Connection, Counter, HitCounter } from 'micro-stat'

export default function (context, inject) {
  Connection.connect('https://micro-stat-functions.azurewebsites.net/api/ingest?dsn=b519f63d-a2c2-41fa-9763-30f4f897edaa')

  const statistics = {
    Counter,
    HitCounter
  }

  const myCounter = new HitCounter('Website Loaded')
  myCounter.publish()

  inject('statistics', statistics)
}
