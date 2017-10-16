function findDeterminant(){
	const a1=document.querySelector("#i1");const a2=document.querySelector("#i2");const a3=document.querySelector("#i3");
	const b1=document.querySelector("#i4");const b2=document.querySelector("#i5");const b3=document.querySelector("#i6");
	const c1=document.querySelector("#i7");const c2=document.querySelector("#i8");const c3=document.querySelector("#i9");
	let determinant=(parseInt(a1.value)*parseInt(b2.value)*parseInt(c3.value))+(parseInt(b1.value)*parseInt(c2.value)*parseInt(a3.value))+(parseInt(a2.value)*parseInt(c1.value)*parseInt(b3.value))-(parseInt(c1.value)*parseInt(b2.value)*parseInt(a3.value))-(parseInt(a1.value)*parseInt(c2.value)*parseInt(b3.value))-( parseInt(a2.value)*parseInt(b1.value)*parseInt(c3.value) );
	let other=(parseInt(a1.value)+parseInt(b2.value)+parseInt(c3.value))-(parseInt(c1.value)+parseInt(b2.value)+parseInt(a3.value));
	document.querySelector("#demo").innerHTML = other;
}
document.querySelector("#button").addEventListener('click',findDeterminant);