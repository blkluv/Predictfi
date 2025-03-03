'use client'

import { useReadContract } from 'thirdweb/react'
import { contract } from '@/constants/contract'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketCard } from './marketCard'
import { Navbar } from './navbar'
import { MarketCardSkeleton } from './market-card-skeleton'
import { Footer } from "./footer"
import { Lock, Globe, User } from 'lucide-react'

export function EnhancedPredictionMarketDashboard() {
    const { data: marketCount, isLoading: isLoadingMarketCount } = useReadContract({
        contract,
        method: "function marketCount() view returns (uint256)",
        params: []
    }); 

    // Show 6 skeleton cards while loading
    const skeletonCards = Array.from({ length: 6 }, (_, i) => (
        <MarketCardSkeleton key={`skeleton-${i}`} />
    ));

    return (
        <div className="min-h-screen flex flex-col dark:bg-background dark:text-foreground">
            <div className="flex-grow container mx-auto p-4">
                <Navbar />
                <div className="mb-4">
                    <img 
                        src="https://t4.ftcdn.net/jpg/08/63/37/05/240_F_863370595_dNemGSt2gktrVy12zmjAYJLUDYyXogZC.jpg" 
                        alt="Predictify Background" 
                        className="w-full h-auto rounded-lg shadow-lg filter brightness-75" 
                    />
                </div>
                <div className="mb-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">Benefits of Predictfi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:text-white">
                            <Lock className="h-12 w-12 mb-2 text-green-500 transition-transform duration-300 hover:scale-110" />
                            <h3 className="text-lg font-semibold">Secure</h3>
                            <p className="text-center">Your assets are protected with top-notch security protocols.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:text-white">
                            <Globe className="h-12 w-12 mb-2 text-blue-500 transition-transform duration-300 hover:scale-110" />
                            <h3 className="text-lg font-semibold">Decentralized</h3>
                            <p className="text-center">Enjoy the benefits of a decentralized platform without intermediaries.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:text-white">
                            <User className="h-12 w-12 mb-2 text-yellow-500 transition-transform duration-300 hover:scale-110" />
                            <h3 className="text-lg font-semibold">User Friendly</h3>
                            <p className="text-center">An intuitive interface designed for all users.</p>
                        </div>
                    </div>
                </div>
                <Tabs defaultValue="active" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="pending">Pending Resolution</TabsTrigger>
                        <TabsTrigger value="resolved">Resolved</TabsTrigger>
                    </TabsList>
                    
                    {isLoadingMarketCount ? (
                        <TabsContent value="active" className="mt-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {skeletonCards}
                            </div>
                        </TabsContent>
                    ) : (
                        <>
                            <TabsContent value="active">
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {Array.from({ length: Number(marketCount) }, (_, index) => (
                                        <MarketCard 
                                            key={index} 
                                            index={index} 
                                            filter="active"
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="pending">
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {Array.from({ length: Number(marketCount) }, (_, index) => (
                                        <MarketCard 
                                            key={index} 
                                            index={index}
                                            filter="pending"
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="resolved">
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {Array.from({ length: Number(marketCount) }, (_, index) => (
                                        <MarketCard 
                                            key={index} 
                                            index={index}
                                            filter="resolved"
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        </>
                    )}
                </Tabs>
            </div>
            <Footer />
        </div>
    );
}
