import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search, Hash } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">モヤモヤシェア</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">あなたの「モヤモヤ」をシェアしよう</h2>
          <p className="text-xl text-gray-600 mb-6">日々の悩みや困りごとを気軽に投稿。みんなで共有し、共感しあえる場所です。</p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            <PlusCircle className="mr-2 h-5 w-5" />
            モヤモヤを投稿する
          </Button>
        </section>

        <section className="mb-12">
          <div className="flex gap-4 mb-6">
            <Input placeholder="キーワードで検索" className="flex-grow" />
            <Button>
              <Search className="mr-2 h-5 w-5" />
              検索
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['仕事', '人間関係', '健康', '生活'].map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['#疲れた', '#悩み', '#ストレス', '#不安'].map((tag) => (
              <Button key={tag} variant="ghost" size="sm" className="text-blue-500">
                <Hash className="mr-1 h-4 w-4" />
                {tag.slice(1)}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">最新のモヤモヤ</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p className="text-gray-800 mb-4">仕事が忙しくて趣味の時間が取れない…</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>2分前</span>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        <Hash className="mr-1 h-4 w-4" />
                        仕事
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline">もっと見る</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 mt-12 border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2023 モヤモヤシェア. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

