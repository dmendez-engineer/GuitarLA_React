import {useState,useEffect} from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'
import Footer from './components/footer'
import Header from './components/header'
import styles from './styles/index.css'


export function meta(){
    return(
        {
            charset:'utf-8',
            title:'GuitarLA - Remix',
            viewport:'width=device-width, initial-scale=1'
        }
    )
}
export function links(){
    return[
        {
            rel:'stylesheet',
            href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'stylesheet',
            href:styles
        },
        {
            rel:'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href:'https://fonts.gstatic.com',
            crossOrigin:"true"
        },
        {
            rel:'stylesheet',
            href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;1,400;1,700;1,900&family=Roboto:ital,wght@0,400;0,900;1,700&display=swap"
            
        }
    ]
}

export default function App(){
    const carritoLs= typeof window!=='undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? []:null;
    
    const[carrito,setCarrito]=useState(carritoLs);
    
    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(carrito));
    },[carrito]);

    const agregarCarrito=(guitarra)=>{
        
        if(carrito.some(guitarraState => guitarraState.id===guitarra.id)){
            
            const carritoActualizado=carrito.map(guitarraState=>{
                if(guitarraState.id===guitarra.id){
                    guitarraState.cantidad=guitarra.cantidad;
                }
                return guitarraState;
            });
            setCarrito(carritoActualizado);
           
        }else{
            setCarrito([...carrito,guitarra]);
        }
        //localStorage.setItem('carrito',JSON.stringify(carrito));
        
    }
    const actualizarCantidad=(guitarra)=>{
        const carritoActualizado=carrito.map(guitarraNueva=>{
            if(guitarraNueva.id===guitarra.id){
                guitarraNueva.cantidad=guitarra.cantidad;
            }
            return guitarraNueva;
        });
        setCarrito(carritoActualizado);
    }
    const eliminarProducto=(id)=>{
        const carritoActualizado=carrito.filter(g=>g.id!==id);
        setCarrito(carritoActualizado);
    };

    return (
        <Document>         
            
            <Outlet
            context={{
                carrito:carrito,
                agregarCarrito:agregarCarrito,
                actualizarCantidad:actualizarCantidad,
                eliminarProducto:eliminarProducto

            }}
            />
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
            <Header/>    
            {children}
            <Footer/>
            <Scripts/>
            <LiveReload/>
            </body>    
        </html>
    )

}

export function CatchBoundary(){
    const error=useCatch();

    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link to="/" className='error-enlace'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )

}
export function ErrorBoundary({error}){
    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link to="/">Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}