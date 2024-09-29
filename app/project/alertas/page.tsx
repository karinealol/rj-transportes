"use client"

import React from 'react'
import { AlertTriangle, Info, MapPin, Clock, ThumbsUp, ThumbsDown, MessageCircle, Search, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Alertas() {
  const alerts = [
    {
      type: 'urgente',
      title: 'Acidente na Av. Brasil',
      description: 'Colisão entre dois veículos na altura do km 114. Duas faixas interditadas.',
      location: 'Zona Norte',
      time: '30 min atrás',
      impact: 'Alto'
    },
    {
      type: 'transito',
      title: 'Obras na Linha Amarela',
      description: 'Obras de manutenção causando lentidão no sentido Barra da Tijuca.',
      location: 'Zona Norte → Zona Oeste',
      time: '1 hora atrás',
      impact: 'Médio'
    },
    {
      type: 'info',
      title: 'Desvio Temporário - Ônibus 432',
      description: 'Devido a um evento na Praia de Copacabana, a linha 432 está operando com desvio.',
      location: 'Zona Sul',
      time: '2 horas atrás',
      impact: 'Baixo'
    },
    {
      type: 'normal',
      title: 'Trânsito fluindo bem',
      description: 'Não há relatos de problemas significativos nas principais vias da cidade neste momento.',
      location: 'Cidade do Rio de Janeiro',
      time: '15 min atrás',
      impact: 'Nenhum'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Alertas de Trânsito</h1>
        
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-800 text-white p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Buscar e Filtrar Alertas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Buscar por palavra-chave" 
                className="flex-grow"
              />
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os tipos</SelectItem>
                  <SelectItem value="urgente">Urgente</SelectItem>
                  <SelectItem value="transito">Trânsito</SelectItem>
                  <SelectItem value="info">Informativo</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                <Filter className="mr-2 h-4 w-4" /> Aplicar Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alerts.map((alert, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className={`p-4 ${getAlertHeaderColor(alert.type)}`}>
                <CardTitle className="text-lg sm:text-xl font-semibold flex items-center text-white">
                  {getAlertIcon(alert.type)}
                  <span className="ml-2">{alert.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600 mb-4">{alert.description}</p>
                <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{alert.time}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={getImpactBadgeColor(alert.impact)}>
                    Impacto: {alert.impact}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span className="sr-only sm:not-sr-only">Útil</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ThumbsDown className="mr-1 h-4 w-4" />
                      <span className="sr-only sm:not-sr-only">Não útil</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <MessageCircle className="mr-1 h-4 w-4" />
                      <span className="sr-only sm:not-sr-only">Comentar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function getAlertHeaderColor(type: string) {
  switch (type) {
    case 'urgente':
      return 'bg-red-600'
    case 'transito':
      return 'bg-yellow-600'
    case 'info':
      return 'bg-blue-600'
    case 'normal':
      return 'bg-green-600'
    default:
      return 'bg-gray-600'
  }
}

function getAlertIcon(type: string) {
  switch (type) {
    case 'urgente':
      return <AlertTriangle className="h-5 w-5" />
    case 'transito':
      return <Info className="h-5 w-5" />
    case 'info':
      return <Info className="h-5 w-5" />
    case 'normal':
      return <Info className="h-5 w-5" />
    default:
      return <Info className="h-5 w-5" />
  }
}

function getImpactBadgeColor(impact: string) {
  switch (impact) {
    case 'Alto':
      return 'bg-red-100 text-red-800 border-red-300'
    case 'Médio':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'Baixo':
      return 'bg-blue-100 text-blue-800 border-blue-300'
    case 'Nenhum':
      return 'bg-green-100 text-green-800 border-green-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}