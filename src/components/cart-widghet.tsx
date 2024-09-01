import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function CartWidget({ width = 2, height = 2, ...rest}: { width?: number, height?: number }) {
  return (
   <Link to='/cart' className="flex items-center gap-2 cursor-pointer">
    <ShoppingCart {...rest} width={width} height={height}/>
    <div>
     <span className="text-sm">Cart (0)</span>
    </div>
   </Link>
  )
}