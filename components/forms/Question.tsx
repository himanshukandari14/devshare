"use client"
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useRef } from 'react';
import { questionSchema } from "@/lib/validations";
import { Badge } from '../ui/badge';
import Image from 'next/image';
import close from '@/public/assets/icons/close.svg'


export function ProfileForm() {
   const editorRef = useRef(null);
 
  // 1. Define your form.
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: "",
      explaination:"",
      tags:[]

    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof questionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

// enter tag
  const handleInputKeyDown=(e: React.KeyboardEvent<HTMLInputElement>,field:any)=>{
    if(e.key === 'Enter' && field.name ==='tags'){
      e.preventDefault();

      const tagInput= e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if(tagValue !== ''){
        if(tagValue.length >15){
          return form.setError('tags',{
            type:'required',
            message:'tag must be less than 15 characters'
          })
        }

        if(!field.value.includes(tagValue as never)){
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.value = '';
          form.clearErrors('tags')
        }else{
          form.trigger();
        }
      }
    }
  }
// del tag
  const handleTagRemove=(tag:string, field:any)=>{
    const newTags= field.value.filter((t:string)=> t !==tag);
    form.setValue('tags', newTags);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
         
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel className="font-semibold">Username</FormLabel>
              <FormControl className="mt-3.5">
                <Input className="text-white" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription className="mt-2.5">
                BE specific and imagine you are asking question to a real person!!
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
       
        {/*  */}
        <FormField
          control={form.control}
          name="explaination"
         
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel className="font-semibold">Detailed explaination of your problem</FormLabel>
              <FormControl className="mt-3.5">
                {/* to do add a editor */}
                 <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
        onInit={(evt, editor) =>{
          // @ts-ignore
          editorRef.current = editor;
        } }
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 350,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks','codesample','code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | ' +
            'codesample | bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Inter; font-size:14px }'
        }}
      />
              </FormControl>
              <FormDescription className="mt-2.5 capitalize">
                Introduce the problem and expand on what you put in the title. Minimum 20 characters
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
         {/*  */}
        <FormField
          control={form.control}
          name="tags"
         
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel className="font-semibold">Tags</FormLabel>
              <FormControl className="mt-3.5">
                <>
                <Input className="text-white" placeholder="Add Tags..." onKeyDown={(e)=>handleInputKeyDown(e,field)} />

                {field.value.length >0 && (
                  <div className='flex justify-start mt-3 gap-3'>{
                    field.value.map((tag: any)=>(
                      <Badge onClick={()=>handleTagRemove(tag,field)} className='px-4 py-2 rounded-sm' key={tag}>
                        <Image src={close} alt='close' width={12} height={12} />
                        {tag}
                      </Badge>
                    ))
                  }
                    </div>
                ) }</>
                
              </FormControl>
              <FormDescription className="mt-2.5 capitalize">
                Add upto three tags to describe category of your question. you need to press enter to add a tag.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
