import React, { Component}  from 'react';

import Image from 'next/image'

import case1 from '../public/CadenceAvocat.png'
import case2 from '../public/HyphenVMK.png'
import case3 from '../public/Frontale.png'
import Link from "next/link"

function Carrousel(){
	return(
		<div>
		 <p className="px-8 mt-5 font-bold"> Etude des cas: </p> 
		 	<div className="grid grid-cols-3 gap-4 place-items-center">
			 <div className="mt-5">
				<Link href="/cadenceAvocats">
		 		<Image src={case1} alt='caseEtude1'/></Link>
				 <p className="text-center hover:">Cadence Avocat</p>
				 
				
			</div>
			<div className="mt-5">
				<Link href="/hyphenvmk">
		 		<Image src={case2} alt='caseEtude2'/></Link>
				 <p className="text-center">Hyphen VMK</p>
			</div>
			<div className="mt-5">
				<Link href="/frontale">
		 		<Image src={case3} alt='caseEtude3'/></Link>
				 <p className="text-center">Frontale</p>
			</div>
			</div>
		</div>)
}
export default Carrousel