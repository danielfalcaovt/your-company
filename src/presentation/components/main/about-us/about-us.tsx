import React from 'react'
import * as styles from './about-us-styles.scss'
import LandscapeChart from './elements/charts/landscape-chart'
import CurrencyList from './elements/charts/currency-list'

export default function AboutUs (): JSX.Element {
  return (
    <section className={styles.aboutUsContainer}>
      <article className={styles.aboutUs}>
        <div className={styles.aboutUsTitle}>
          <span>Best platform Cryptocurrency</span>
          <h1>Embrace the Future Currency of Our Time</h1>
        </div>
        <div className={styles.aboutUsTitleCharts}>
          <LandscapeChart />
        </div>
        <div className={styles.aboutUsText}>
          <p>
            Embrace the surge of new digital currencies with flexibity and
            innovation to navigate the global market's complexities.
          </p>
          <div className={styles.aboutUsTextButtons}>
            <button className={styles.aboutUsConfirmButton}>Trade Now</button>
            <button className={styles.aboutUsWatchButton}>
              Watch Demo
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVR4nO1WzWoUQRD+DooH9aB48Cci/qCCx0CYqZ/tUyCo8Wz0CXRXQRR8Ba8eBFd8gBCjpxjF99AY3yGo0cu6BqW6e8dh2ez0ZOIhsB8UDEx39ddV9VU1MMEEdaB6GsodKL2D8BqEfgbjNSitQrkNNzOFXUeWnYJSF0J9KP+psC0oLSHPz+zO4S26AeXN6LwH4UVIfhNElzA7e9CbfYss+H+2JqzdBPN8s8OF7oUbmUNagurZ6j1yDsLL/6LBnSY334LQbwg9qL+fH/q95qN2JDLLeQz78OFKz5BlR5NJhEh8h+qJdAJCL4uwDyM43IDk9zE9vT/B1+voq5suNfGh643MebniTX4tujrWH9H5ULzU95GtJsCd6Hxxm/+RAH0sEXkP5ivb+7QCtnVyN4EArcbFC2MJOLcvqmQj1krf14dzx0b4vB2JrlQTEPoSDsgujCVQrJcjUHpS6F/oK0QeY27uQLHG+kTY9zkhAhyqn+hwEoEBLAVCH0opWi/qw3wNmtMeIEDrsQYupqeAnxZzYlQKXH451sCnPVCEyu3/J0O6U03AzUzFcPb8YGnaiExNtRqRQflFPGAZTVux0pt4++dIBtHJQg02UHY6jJQfxYt8g3PHUQvM88U4HiaRevhgHGt+rfb+0lwIDxKbajZYquBzHsMe9rbRCCLXwzyPTzKr6Bbf8tp27lAw07mX2iso/yrCvuObD8O0XW424yz0g269B0gqTEamZeG3vqsJ/Qhm37zi/yVLbYIJ4PEXAAdQZcvIWjYAAAAASUVORK5CYII="/>            </button>
          </div>
          <ul>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR4nO2WO07DQBCGp+EIFDyCkGgooAqCeB52jQQRErcAEq7AFSgjEAUlfYCbEISUFkGXR0ciI48JiZB3vX6AKDLSyI7tnU/z78xsAOb274xoDRgbwPQIQh1gHKrrvT47A5FKecBabQUEW8A4AqEwxccgeAfB3noxKPMRMA4cgD+9Dz7W80F9Oo8zyAydZs9eM3umUgg6hTtnHuyu5pTXLDvicjpY6KZEaOxMVy4tMyofjCNV0ry32CgIeQPmKhBxwrtTi8z4UAgaeFsaB3EnQe62JWN6yQfFd/Br2xoj8DaB8TXhu45N6sEvQUONbZaa+obgx19TbGiUN7pGv21tZTTB58RFiBv6njmYgWeBhnapTcUV7f2kHWJ4NyM0tBeXHm3GhVN4tbqQCSrRej6xgKViHSCz8ExQ/LAPEJUSr1OCdEHoQqvZvfJb4Hbwm6o7l/dAZAmcjGi/pJk9BqJDN+i35F6z+B8BbEAu87GeU/YeMB/kg06MeRGELrUyXbIUvHXfUxeL2iE62gTvgelJZ696dE9t7dPUlpkb/L19AoG5e1W1DGdlAAAAAElFTkSuQmCC" />
              Transactions are secure and encrypted
            </li>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR4nO2WO07DQBCGp+EIFDyCkGgooAqCeB52jQQRErcAEq7AFSgjEAUlfYCbEISUFkGXR0ciI48JiZB3vX6AKDLSyI7tnU/z78xsAOb274xoDRgbwPQIQh1gHKrrvT47A5FKecBabQUEW8A4AqEwxccgeAfB3noxKPMRMA4cgD+9Dz7W80F9Oo8zyAydZs9eM3umUgg6hTtnHuyu5pTXLDvicjpY6KZEaOxMVy4tMyofjCNV0ry32CgIeQPmKhBxwrtTi8z4UAgaeFsaB3EnQe62JWN6yQfFd/Br2xoj8DaB8TXhu45N6sEvQUONbZaa+obgx19TbGiUN7pGv21tZTTB58RFiBv6njmYgWeBhnapTcUV7f2kHWJ4NyM0tBeXHm3GhVN4tbqQCSrRej6xgKViHSCz8ExQ/LAPEJUSr1OCdEHoQqvZvfJb4Hbwm6o7l/dAZAmcjGi/pJk9BqJDN+i35F6z+B8BbEAu87GeU/YeMB/kg06MeRGELrUyXbIUvHXfUxeL2iE62gTvgelJZ696dE9t7dPUlpkb/L19AoG5e1W1DGdlAAAAAElFTkSuQmCC" />
              Solutions for using currency without banks
            </li>
          </ul>
        </div>
        <div className={styles.aboutUsTextCharts}>
          <CurrencyList/>
        </div>
      </article>
    </section>
  )
}
