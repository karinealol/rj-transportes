import React from "react";
import {
  Bus,
  Train,
  Clock,
  Search,
  AlertTriangle,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Horarios() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-2 sm:p-4">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
          Horários de Transporte
        </h1>

        <Card className="shadow-lg">
          <CardHeader className="bg-blue-800 text-white p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">
              Buscar Horários
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col space-y-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de Transporte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bus">
                    <div className="flex items-center">
                      <Bus className="mr-2 h-4 w-4" />
                      <span>Ônibus</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="train">
                    <div className="flex items-center">
                      <Train className="mr-2 h-4 w-4" />
                      <span>Trem</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="metro">
                    <div className="flex items-center">
                      <Train className="mr-2 h-4 w-4" />
                      <span>Metrô</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Número da linha ou nome da estação"
                  className="pl-10 w-full"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                <Search className="mr-2 h-4 w-4" /> Buscar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="onibus" className="space-y-6">
          <TabsList className="flex flex-wrap justify-start gap-2 bg-blue-100 p-2 rounded-lg">
            <TabsTrigger
              value="onibus"
              className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Ônibus
            </TabsTrigger>
            <TabsTrigger
              value="trem"
              className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Trem
            </TabsTrigger>
            <TabsTrigger
              value="metro"
              className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Metrô
            </TabsTrigger>
          </TabsList>
          <TabsContent value="onibus">
            <Card>
              <CardHeader className="bg-blue-700 text-white p-4">
                <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center">
                  <Bus className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Próximas Partidas - Ônibus 474
                </CardTitle>
                <p className="text-sm text-blue-100 mt-1">
                  Copacabana → Centro
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px] sm:w-[100px]">
                          Horário
                        </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Lotação
                        </TableHead>
                        <TableHead className="text-right">Plataforma</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          time: "10:00",
                          status: "No horário",
                          crowding: "Baixa",
                          platform: "01",
                        },
                        {
                          time: "10:15",
                          status: "5 min atrasado",
                          crowding: "Média",
                          platform: "02",
                        },
                        {
                          time: "10:30",
                          status: "No horário",
                          crowding: "Alta",
                          platform: "01",
                        },
                        {
                          time: "10:45",
                          status: "No horário",
                          crowding: "Baixa",
                          platform: "03",
                        },
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                              {row.time}
                            </div>
                          </TableCell>
                          <TableCell>
                            {row.status === "No horário" ? (
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-800 text-xs sm:text-sm"
                              >
                                <CheckCircle className="mr-1 h-3 w-3" />
                                {row.status}
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm"
                              >
                                <AlertTriangle className="mr-1 h-3 w-3" />
                                {row.status}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge
                              variant="outline"
                              className={`text-xs sm:text-sm ${
                                row.crowding === "Baixa"
                                  ? "bg-green-100 text-green-800"
                                  : row.crowding === "Média"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {row.crowding}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            {row.platform}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="trem">
            <Card>
              <CardHeader className="bg-blue-700 text-white p-4">
                <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center">
                  <Train className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Próximas Partidas - Trem
                </CardTitle>
                <p className="text-sm text-blue-100 mt-1">
                  Central do Brasil → Nova Iguaçu
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px] sm:w-[100px]">
                          Horário
                        </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Lotação
                        </TableHead>
                        <TableHead className="text-right">Plataforma</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          time: "11:00",
                          status: "No horário",
                          crowding: "Média",
                          platform: "05",
                        },
                        {
                          time: "11:30",
                          status: "No horário",
                          crowding: "Baixa",
                          platform: "06",
                        },
                        {
                          time: "12:00",
                          status: "3 min atrasado",
                          crowding: "Alta",
                          platform: "05",
                        },
                        {
                          time: "12:30",
                          status: "No horário",
                          crowding: "Média",
                          platform: "06",
                        },
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                              {row.time}
                            </div>
                          </TableCell>
                          <TableCell>
                            {row.status === "No horário" ? (
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-800 text-xs sm:text-sm"
                              >
                                <CheckCircle className="mr-1 h-3 w-3" />
                                {row.status}
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm"
                              >
                                <AlertTriangle className="mr-1 h-3 w-3" />
                                {row.status}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge
                              variant="outline"
                              className={`text-xs sm:text-sm ${
                                row.crowding === "Baixa"
                                  ? "bg-green-100 text-green-800"
                                  : row.crowding === "Média"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {row.crowding}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            {row.platform}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
