import React, { useState } from 'react';
import { 
  CheckCircle, 
  Shield, 
  Truck, 
  CreditCard, 
  Clock,
  AlertTriangle,
  Star,
  ChevronDown,
  ChevronUp,
  Lock,
  Award,
  Users,
  TrendingUp,
  Play
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER - HEADLINE (O SOCO NA CARA) */}
      <header className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-8 md:py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
            MÉDICOS EM CHOQUE: Fórmula Natural "SECRETA" de Raiz Dourada 
            <span className="text-white block md:inline bg-orange-700 px-2 rounded"> ATACA </span>
            a Causa Raiz da Dor Articular e Devolve a Mobilidade em 
            <span className="text-white block md:inline bg-orange-700 px-2 rounded"> 17 DIAS</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90 max-w-4xl mx-auto">
            Junte-se aos +27.482 brasileiros que abandonaram os remédios caros e voltaram a viver sem o tormento da dor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base md:text-lg">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
              <span>27.482 pessoas aliviadas</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              <span>97% de aprovação</span>
            </div>
          </div>
        </div>
      </header>

      {/* VÍDEO DE VENDAS (VSL - A HIPNOSE) - FORMATO VERTICAL MOBILE */}
      <section className="py-8 md:py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-orange-800 leading-tight">
            ASSISTA: Cientista Brasileiro Ignorado Pela Indústria Farmacêutica Revela Como Essa Raiz 
            <span className="text-orange-600 block md:inline"> DESLIGA A INFLAMAÇÃO </span>
            do seu Corpo
          </h2>
          <div className="relative bg-black rounded-lg overflow-hidden mx-auto" style={{ maxWidth: '360px', aspectRatio: '9/16' }}>
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              controls
              poster="/ChatGPT Image 16_07_2025, 12_23_39.png"
            >
              <source src="#" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-1">
              <Play className="w-3 h-3" />
              ASSISTA AGORA
            </div>
          </div>
          <p className="text-sm text-orange-600 mt-4 max-w-md mx-auto">
            📱 Vídeo otimizado para celular - Assista na vertical
          </p>
        </div>
      </section>

      {/* PROBLEMA E AGITAÇÃO (JOGA SAL NA FERIDA) */}
      <section className="py-8 md:py-16 bg-orange-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-orange-800">
            Se Você Sente Isso, <span className="text-orange-600">VOCÊ ESTÁ EM RISCO:</span>
          </h2>
          <div className="grid gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-red-700 mb-2">Dor insuportável ao acordar?</h3>
                <p className="text-gray-700 text-sm md:text-base">Aquela sensação de que seu corpo foi atropelado por um caminhão toda manhã.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-700 mb-2">Juntas travando e estalando o dia todo?</h3>
                <p className="text-gray-700 text-sm md:text-base">Cada movimento é um lembrete doloroso da sua condição.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-700 mb-2">Dificuldade para fazer tarefas simples?</h3>
                <p className="text-gray-700 text-sm md:text-base">Subir escadas ou segurar um copo virou um desafio épico.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-700 mb-2">Medo de perder sua independência?</h3>
                <p className="text-gray-700 text-sm md:text-base">O terror de virar um peso para sua família te consome.</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-200 border-l-4 border-orange-600 p-4 md:p-6 rounded">
            <p className="text-base md:text-lg font-semibold text-orange-800">
              Ignorar essa dor não vai fazê-la desaparecer. Ela só vai piorar, roubando sua alegria e sua vida, 
              te transformando num prisioneiro no próprio corpo.
            </p>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO DA SOLUÇÃO (O "MILAGRE") */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-orange-500 to-orange-400 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-white leading-tight">
            CHEGA DE SOFRER! CONHEÇA O ARTICULAZEN - 
            <span className="text-orange-100 block md:inline bg-orange-700 px-2 rounded"> A ARMA NATURAL </span>
            CONTRA A INFLAMAÇÃO CRÔNICA
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <img 
                  src="https://i.imgur.com/eobjHnm.png" 
                alt="Articulazen - Pote do Produto" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg md:text-xl leading-relaxed text-white mb-6 md:mb-8">
                Esqueça os analgésicos que só mascaram a dor e destroem seu estômago. 
                Após anos de pesquisa, a fórmula concentrada do Articulazen com 
                <span className="font-bold text-orange-100 bg-orange-700 px-1 rounded"> Extrato de Cúrcuma Americana 20x mais potente </span>
                foi desenvolvida para agir diretamente na fonte da inflamação, como um míssil teleguiado.
              </p>
              <p className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Ele não remedia, ele <span className="text-orange-100 bg-orange-700 px-2 rounded">RESOLVE</span>.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-base md:text-lg">Reduz inflamação em 72 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-base md:text-lg">100% natural, sem efeitos colaterais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-base md:text-lg">Aprovado pela ANVISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL (PRA CALAR A BOCA DOS CÉTICOS) */}
      <section className="py-8 md:py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-orange-800">
            Quem Usou, Aprovou. Veja Histórias <span className="text-orange-600">REAIS:</span>
          </h2>
          <div className="grid gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-orange-500 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.imgur.com/8seCdzw.jpeg" 
                  alt="Maria Silva" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-orange-800 text-sm md:text-base">Maria Silva</h4>
                  <p className="text-xs md:text-sm text-gray-600">67 anos</p>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">
                "Eu não aguentava mais de dor no joelho, mal conseguia brincar com meu neto. 
                Em 3 semanas com o Articulazen, parece que tenho um joelho novo! Voltei a caminhar no parque. Obrigada!"
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-orange-500 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.imgur.com/mKzLANi.jpeg" 
                  alt="João Santos" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-orange-800 text-sm md:text-base">João Santos</h4>
                  <p className="text-xs md:text-sm text-gray-600">58 anos</p>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">
                "Minha artrite nas mãos era um inferno. Tomava remédio forte todo dia. 
                Um amigo indicou o Articulazen e eu duvidei. Puta que pariu, foi a melhor coisa que fiz. A dor sumiu 90%."
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-orange-500 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.imgur.com/CHKsLhu.jpeg" 
                  alt="Ana Costa" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-orange-800 text-sm md:text-base">Ana Costa</h4>
                  <p className="text-xs md:text-sm text-gray-600">72 anos</p>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">
                "Meu médico disse que era da idade e pra me acostumar. Acostumar o caralho! 
                O Articulazen me devolveu a vida."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA (A HORA DE PASSAR O CARTÃO) */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4 text-white">
            ESCOLHA O SEU KIT DA LIBERDADE
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-orange-100 font-semibold">
            DESCONTO DE LANÇAMENTO DE ATÉ 60% HOJE!
          </p>
          <div className="grid gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Kit 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-orange-800">EXPERIMENTE</h3>
              <div className="text-center mb-6">
                <img 
                  src="https://i.imgur.com/eobjHnm.png" 
                  alt="1 Pote Articulazen" 
                  className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded"
                />
                <p className="text-base md:text-lg text-orange-600 mb-2">1 Pote - Tratamento 1 Mês</p>
                <p className="text-sm text-gray-500 line-through">De R$ 97</p>
                <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">R$ 39,90</p>
                <p className="text-xs md:text-sm text-orange-600">ou 12x de R$ 3,32</p>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg transition-colors">
                COMPRAR AGORA
              </button>
            </div>

            {/* Kit 2 - MAIS VENDIDO */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 border-4 border-orange-600 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 md:px-6 py-1 md:py-2 rounded-full font-bold text-sm md:text-base">
                MAIS VENDIDO
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-orange-800 mt-2 md:mt-4">LEVE 3 POTES</h3>
              <div className="text-center mb-6">
                <img 
                  src="https://i.imgur.com/Mnogy18.png" 
                  alt="3 Potes Articulazen" 
                  className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded"
                />
                <p className="text-base md:text-lg text-orange-600 mb-2">Tratamento 3 Meses</p>
                <p className="text-sm text-gray-500 line-through">De R$ 291</p>
                <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">R$ 97,70</p>
                <p className="text-xs md:text-sm text-orange-600">ou 12x de R$ 8,14</p>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold mt-2">
                  66% DE DESCONTO
                </div>
                <p className="text-orange-600 font-bold text-xs md:text-sm mt-2">+ FRETE GRÁTIS</p>
              </div>
              <button className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg transition-colors">
                COMPRAR COM DESCONTO MÁXIMO
              </button>
            </div>

            {/* Kit 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-orange-800">COMPLETO</h3>
              <div className="text-center mb-6">
                <img 
                  src="https://i.imgur.com/PQfnT3P.jpeg" 
                  alt="5 Potes Articulazen" 
                  className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded"
                />
                <p className="text-base md:text-lg text-orange-600 mb-2">5 Potes - Tratamento 5 Meses</p>
                <p className="text-sm text-gray-500 line-through">De R$ 485</p>
                <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">R$ 127,70</p>
                <p className="text-xs md:text-sm text-orange-600">ou 12x de R$ 10,64</p>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold mt-2">
                  74% DE DESCONTO
                </div>
                <p className="text-orange-600 font-bold text-xs md:text-sm mt-2">+ FRETE GRÁTIS</p>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg transition-colors">
                COMPRAR AGORA
              </button>
            </div>
          </div>

          {/* Ícones de Segurança */}
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-8 mb-6 md:mb-8 text-white">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="text-xs md:text-sm font-semibold">Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="text-xs md:text-sm font-semibold">Site Protegido</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="text-xs md:text-sm font-semibold">Entrega Garantida</span>
            </div>
          </div>

          {/* Bandeiras de Cartão */}
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <div className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">VISA</div>
            <div className="bg-red-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">MASTER</div>
            <div className="bg-blue-800 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">AMEX</div>
            <div className="bg-orange-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">ELO</div>
            <div className="bg-yellow-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">PIX</div>
          </div>
        </div>
      </section>

      {/* GARANTIA (GARANTIA BLINDADA) */}
      <section className="py-8 md:py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-600 text-white p-4 md:p-6 rounded-full mb-6 md:mb-8">
            <Award className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-orange-800">
            SEU RISCO É ZERO! GARANTIA BLINDADA ARTICULAZEN
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-4 border-orange-500">
            <div className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">90 DIAS</div>
            <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">
              Ou você sente suas dores <span className="font-bold text-orange-600">DESAPARECEREM</span> e sua vida mudar, 
              ou nós devolvemos 100% do seu dinheiro.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Sem perguntas, sem letrinha miúda, sem caôzada. O risco é todo nosso. 
              <span className="font-bold text-orange-600"> Você só tem a ganhar.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ (PERGUNTAS DE QUEM AINDA TÁ EM DÚVIDA) */}
      <section className="py-8 md:py-16 bg-orange-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-orange-800">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "O Articulazen tem contra-indicação?",
                answer: "Não, por ser 100% natural, mas se você tem alguma condição médica específica ou toma medicamentos controlados, consulte seu médico antes de usar."
              },
              {
                question: "Como eu devo tomar?",
                answer: "Duas cápsulas por dia, uma no almoço e uma no jantar, preferencialmente após as refeições. Simples assim."
              },
              {
                question: "Em quanto tempo vejo resultado?",
                answer: "A maioria sente alívio na primeira semana, mas os resultados mais significativos aparecem com 3 meses de uso contínuo."
              },
              {
                question: "O site é seguro?",
                answer: "Mais seguro que cofre de banco. Usamos a mesma tecnologia de segurança dos grandes bancos. Seus dados estão protegidos por criptografia SSL."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full p-4 text-left bg-white hover:bg-orange-50 font-semibold text-orange-800 flex justify-between items-center text-sm md:text-base"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 text-gray-700 text-sm md:text-base bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - ÚLTIMA CHAMADA */}
      <footer className="bg-orange-600 text-white py-8 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            NÃO DEIXE A DOR ROUBAR MAIS UM DIA DA SUA VIDA!
          </h3>
          <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
            Milhares de pessoas já escolheram o Articulazen para recuperar sua qualidade de vida. 
            Agora é a sua vez.
          </p>
          <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-lg md:text-xl transition-colors">
            COMPRAR ARTICULAZEN AGORA
          </button>
          <div className="mt-6 md:mt-8 text-xs md:text-sm opacity-70">
            <p>© 2024 Articulazen. Todos os direitos reservados.</p>
            <p>Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;