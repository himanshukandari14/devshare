"use client"
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectGroup } from '@radix-ui/react-select';


interface Props{
    filters:{
        name:string,
        value:string
    }[];
    otherClasses?:string,
    containerClass?:string
}
const Filter = ({filters,otherClasses, containerClass}:Props) => {
  return (
    <div>
     <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
    {filters.map((item) => (
        <SelectItem key={item.value} value={item.value}>
            {item.name}
        </SelectItem>
    ))}
    </SelectGroup>
   
    
  </SelectContent>
</Select>

    </div>
  )
}

export default Filter
