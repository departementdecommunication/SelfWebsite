import React, { Component}  from 'react';
import Link from "next/link"


function Carrousel(){
	return(
		<div> 
			<p className="px-8 mt-5 font-bold"> Ajoutez nous </p>
			<Link href="mailto:bonjour@departementdecommunication">
		    <p className="px-8 mt-5">+ bonjour@departementdecommunication</p></Link>
		</div>)
}
export default Carrousel