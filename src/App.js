import './App.css'
import { Header }                               from './components/layout/Header'
import { createContext, useEffect, useReducer } from 'react'
import { reducer }                              from './assets/shop/reducer'
import { SplitScreen }               from './components/layout/SplitScreen'

export const AppContext = createContext()

function App () {

	const [appState,dispatch] = useReducer(reducer,{
		compareCount  :0,
		modalLoginOpen:false,
		isHamburgerOpen:false,
		isCartOpen    :false,
		cart          :[],
		productsState:[],
		activeFilters:[],
		userLogin:false,
	})

	useEffect(()=> dispatch({type:'INITIAL'}),[])

	return (
		<AppContext.Provider value={[appState,dispatch]}>
		<div className="App">
				<Header/>
			<main className="App-main">
			<SplitScreen/>
			</main>
			<footer className="App-footer">
				{/*<Footer/>*/}
			</footer>
		</div>
		</AppContext.Provider>
	)
}

export default App
