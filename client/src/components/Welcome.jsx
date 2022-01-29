import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import Loader from './Loader'

const companyCommonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    step='0.0001'
    value={value}
    onChange={(event) => handleChange(event, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
)

export default function Welcome() {
  const connectWallet = () => {}
  const handleSubmit = () => {}

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col justify-between items-start md:p-20 py-12 px-4'>
        <div className='flex flex-1 flex-col justify-start mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Envia crypto <br /> alrededor del mundo
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
            Explora el mundo del blockchain Compra y vende criptomonedas
          </p>
          <button
            type='button'
            onClick={connectWallet}
            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd'
          >
            <p className='text-white text-base font-semibold'>Conectar wallet</p>
          </button>

          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>Confiabilidad</div>
            <div className={`${companyCommonStyles}`}>Seguridad</div>
            <div className={`rounded-tr-2xl ${companyCommonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${companyCommonStyles}`}>Web 3.0</div>
            <div className={`${companyCommonStyles}`}>Bajas comisiones</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className='flex flex-col flex-1 justify-start items-center w-full mf:mt-0 mt-10'>
          <div className='p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  <SiEthereum fontSize={21} color='#FFF' />
                </div>
                <BsInfoCircle fontSize={17} color='#FFF' />
              </div>
              <div>
                <p className='text-white font-light text-sm'>Address</p>
                <p className='text-white font-semibold text-lg'>Ethereum</p>
              </div>
            </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input
              placeholder='Destino'
              name='addressTo'
              type='text'
              handleChange={() => {}}
            />
            <Input
              placeholder='Monto (ETH)'
              name='amount'
              type='number'
              handleChange={() => {}}
            />
            <Input
              placeholder='Palabra clave (GIF)'
              name='keyword'
              type='text'
              handleChange={() => {}}
            />
            <Input
              placeholder='Mensaje'
              name='message'
              type='text'
              handleChange={() => {}}
            />

            <div className='h-[1px] w-full bg-gray-400 my-2' />

            {false
              ? (
                <Loader />
                )
              : (
                <button
                  type='button'
                  onClick={handleSubmit}
                  className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
                >
                  Enviar
                </button>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}
