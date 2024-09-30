"use client";

import React from "react";
import {
  MapPin,
  Bus,
  Bike,
  CarTaxiFront,
  Clock,
  DollarSign,
  Search,
  Wifi,
  Map as MapIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PaginaInicial() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto py-5 mb-16 md:mb-0">
        <div className="space-y-12">
          <section className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              RJ Transportes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sua solução completa para mobilidade urbana no Rio de Janeiro
            </p>
          </section>

          <Card className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
            <CardHeader className="bg-blue-800 text-white p-6 sm:p-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                Planeje sua viagem
              </CardTitle>
              <CardDescription className="text-blue-200 text-base sm:text-lg">
                Encontre a melhor rota combinando diferentes meios de transporte
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                <div className="flex-grow">
                  <label
                    htmlFor="origem"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Origem
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="origem"
                      placeholder="Digite o local de partida"
                      className="pl-10 w-full text-[16px]"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="destino"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Destino
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="destino"
                      placeholder="Digite o destino"
                      className="pl-10 w-full text-[16px]"
                    />
                  </div>
                </div>
                <div className="md:self-end">
                  <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white transition-colors text-base sm:text-lg py-2 px-4 sm:py-3 sm:px-6">
                    <Search className="mr-2 h-5 w-5" /> Buscar Rotas
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                  Rotas Recomendadas
                </h3>
                {[
                  {
                    route: "Copacabana → Centro",
                    duration: "35 min",
                    price: "R$ 12,50",
                    steps: [
                      {
                        icon: Bus,
                        text: "Ônibus 474 (20 min)",
                        color: "text-blue-600",
                      },
                      {
                        icon: Bike,
                        text: "Bicicleta (15 min)",
                        color: "text-green-600",
                      },
                    ],
                    description:
                      "Saia de Copacabana, pegue o ônibus 474 até o Centro, depois use uma bicicleta compartilhada para chegar ao destino final.",
                  },
                  {
                    route: "Barra da Tijuca → Botafogo",
                    duration: "55 min",
                    price: "R$ 18,60",
                    steps: [
                      {
                        icon: Bus,
                        text: "BRT (30 min)",
                        color: "text-blue-600",
                      },
                      {
                        icon: CarTaxiFront,
                        text: "Táxi (25 min)",
                        color: "text-yellow-600",
                      },
                    ],
                    description:
                      "Utilize o BRT da Barra até o Terminal Alvorada, depois pegue um táxi para Botafogo.",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="font-semibold text-lg sm:text-xl text-blue-800 mb-2 sm:mb-0">
                        {item.route}
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-blue-700 bg-blue-100 px-2 py-1 text-sm self-start sm:self-auto"
                      >
                        Recomendado
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center text-gray-600 mb-3 gap-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-3 gap-2">
                      {item.steps.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                        >
                          <step.icon className={`${step.color} h-4 w-4 mr-2`} />
                          <span className="text-sm font-medium">
                            {step.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <section className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 text-center">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Informações em Tempo Real",
                  icon: Clock,
                  description:
                    "Acompanhe horários, preços e disponibilidade dos transportes em tempo real.",
                },
                {
                  title: "Mapas Offline",
                  icon: MapIcon,
                  description:
                    "Navegue mesmo em áreas com pouca conectividade com nossos mapas offline.",
                },
                {
                  title: "Conectividade",
                  icon: Wifi,
                  description:
                    "Receba atualizações e use o app mesmo em áreas com sinal limitado.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="bg-blue-700 text-white p-4 sm:p-6">
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <service.icon className="mr-2 h-6 w-6" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-blue-800 text-base sm:text-lg">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 py-12 px-4 sm:px-8 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Descubra o Rio de Janeiro
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Explore a cidade maravilhosa com facilidade e conforto usando o
                RJ Transportes
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                Comece sua jornada
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
