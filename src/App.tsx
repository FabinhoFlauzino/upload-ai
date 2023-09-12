import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com ❤️ no NLW da RocketSeat</span>

          <Separator orientation="vertical" className="h6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua um prompt para a IA"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado da IA"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">Lembre-se: você pode utilizar a variável no seu prompt</p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="flex border rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className='w-4 h-4' />
              Carregar vídeo
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className='space-y-2'>
              <label htmlFor='transcription_prompt'>Pronpt de transcrição</label>
              <Textarea
                id='transcription_prompt'
                className='h-20 leading-relaxed resize-none'
                placeholder='Inclua palavras-chave mencionadas no vídeo separadas por (,)'
              />

              <Button type='submit' className='w-full'>
                Carregar vídeo
                <Upload className='w-4 h-4 ml-2' />
              </Button>
            </div>
          </form>

          <Separator />

          <form className='space-y-6'>
          <div className='space-y-2'>
              <label>Modelo</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="selecione um prompt...."/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Título do YouTube</SelectItem>
                  <SelectItem value='description'>Descrição do YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <label>Modelo</label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <span className='block text-xs italic text-muted-foreground'>Você poderá customizar essa opção em breve</span>
            </div>

            <Separator />

            <div className='space-y-4'>
              <label>TEmperatura</label>
              <Slider
                min={0}
                max={1}
                step={0.1}
                className='cursor-pointer'
              />

              <span className='block text-xs italic text-muted-foreground  leading-relaxed'>Valores mais alto tende a deixar resultados mais criativos e com possíveis erros</span>
            </div>

            <Separator />

            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='w-4 h-4 ml-2'/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

