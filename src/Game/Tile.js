export default function Tile({ letter, color }) {

  return <div style={{backgroundColor: color}} className="letter">{letter||''}</div>

}