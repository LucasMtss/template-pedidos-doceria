import { Header } from '../components/header'
import { Product } from '../components/product'
import { useCart } from '../hooks/useCart';
import {MENU} from '../utils/data/products'

export function Home() {
  const {numberOfItems} = useCart();

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <Header title='Escolha seu pedido' cartQuatityItems={numberOfItems}/>
      
      {
        MENU.map(section => {
          return (
            <div className='w-full pl-5'>
              <h4 className='text-slate-900 text-xl font-bold mb-3'>{section.title}</h4>
              {
                section.data.map(product => {
                  return <Product data={product}/>
                })
              }
            </div>
          )
        })
      }
      
    </div>
  )
}