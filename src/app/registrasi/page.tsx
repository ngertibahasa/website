"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react"; // Import Loader2
import * as React from "react";

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
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- Form Schema for English Course Consultation ---
const FormSchema = z.object({
    nama: z.string().min(2, {
        message: "Nama harus berisi minimal 2 karakter.",
    }),
    usia: z.coerce.number().min(5, {
        message: "Usia harus angka dan minimal 5 tahun.",
    }).max(99, {
        message: "Usia tidak boleh lebih dari 99 tahun."
    }),
    program: z.string().min(3, {
        message: "Program harus dipilih atau diisi minimal 3 karakter.",
    }),
});

// List of available English programs
const availablePrograms = [
    { label: "General English", value: "general-english" },
    { label: "Conversation Class", value: "conversation-class" },
    { label: "TOEFL Preparation", value: "toefl-preparation" },
    { label: "IELTS Preparation", value: "ielts-preparation" },
    { label: "Business English", value: "business-english" },
    { label: "English for Kids", value: "english-for-kids" },
];

export default function Registrasi() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            nama: "",
            usia: 0,
            program: "",
        },
    });

    // State untuk mengelola status loading
    const [isLoading, setIsLoading] = React.useState(false);

    // --- Fungsi onSubmit untuk Mengirim Data ke Backend ---
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true); // Set loading ke true saat proses dimulai
        try {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://save-leads-neon.vercel.app";

            const response = await fetch(`${backendUrl}/api/konsultasi`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Nama: data.nama,
                    Usia: data.usia,
                    Program: data.program,
                }),
            });

            const result = await response.json();

            if (response.ok && result.status === "success") {
                toast.success("Permintaan konsultasi berhasil dikirim!", {
                    className: "bg-green-500",
                    description: "Anda akan diarahkan ke WhatsApp kami untuk diskusi lebih lanjut.",
                    duration: 3000,
                    onAutoClose: () => {
                        const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
                        const message = encodeURIComponent(`Halo, saya ${data.nama} (Usia: ${data.usia}, Program diminati: ${data.program}). Saya ingin konsultasi lebih lanjut mengenai kursus bahasa Inggris.`);
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                    },
                    action: {
                        label: 'Ke WhatsApp',
                        onClick: () => {
                            const phoneNumber = "6281234567890";
                            const message = encodeURIComponent(`Halo, saya ${data.nama} (Usia: ${data.usia}, Program diminati: ${data.program}). Saya ingin konsultasi lebih lanjut mengenai kursus bahasa Inggris.`);
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                            window.open(whatsappUrl, '_blank');
                        },
                    },
                });
                form.reset();
            } else {
                toast.error("Gagal mengirim permintaan konsultasi.", {
                    className: "bg-red-500",
                    description: result.message || "Terjadi kesalahan pada server kami.",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Terjadi masalah koneksi atau server.", {
                className: "bg-red-500",
                description: "Mohon coba lagi nanti.",
            });
        } finally {
            setIsLoading(false); // Set loading ke false setelah proses selesai (baik sukses maupun gagal)
        }
    }

    return (
        <section className="sourceSans relative isolate">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="flex flex-col md:flex-row p-5 items-center justify-center min-h-screen bg-gray-50">
                <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
                    <div className="text-center max-w-lg mx-auto md:text-lleft">
                        <Image alt="konsultasi" src="/images/benefit-2.webp" className="mx-auto" width={300} height={300} />
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Siap Tingkatkan Kemampuan Bahasa Inggrismu?
                        </h1>
                        <p className="text-md text-gray-600">
                            Dapatkan konsultasi gratis untuk menemukan program kursus bahasa Inggris yang paling cocok untuk kamu. Mulai petualangan berbahasa Inggris kamu hari ini!
                        </p>
                    </div>
                </div>
                <div className="flex min-h-[60vh] h-full w-full md:w-1/2 items-center justify-center px-4 z-20">
                    <Card className="w-full max-w-lg shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-600 font-semibold">Registrasi Sekarang</CardTitle>
                            <CardDescription className="text-sm text-gray-600">
                                Isi formulir di bawah ini dan kami akan segera menghubungimu.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                    {/* Field Nama */}
                                    <FormField
                                        control={form.control}
                                        name="nama"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Lengkap</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Contoh: Budi Santoso" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field Usia */}
                                    <FormField
                                        control={form.control}
                                        name="usia"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel >Usia</FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="Contoh: 25" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field Program (Combobox) */}
                                    <FormField
                                        control={form.control}
                                        name="program"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Program yang diminati</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                role="combobox"
                                                                className={cn(
                                                                    "w-full justify-between",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value
                                                                    ? availablePrograms.find(
                                                                        (program) => program.label === field.value
                                                                    )?.label
                                                                    : "Pilih atau ketik program..."}
                                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Cari atau ketik program..." />
                                                            <CommandList>
                                                                <CommandEmpty>
                                                                    <CommandItem
                                                                        onSelect={() => {
                                                                            const newValue = form.getValues("program");
                                                                            form.setValue("program", newValue);
                                                                            form.trigger("program");
                                                                            (document.getElementById(field.name) as HTMLButtonElement)?.click();
                                                                        }}
                                                                    >
                                                                        {form.getValues("program")} tambahkan sebagai program baru
                                                                    </CommandItem>
                                                                    <CommandItem className="text-muted-foreground">
                                                                        Tidak ada program ditemukan. Ketik untuk menambah baru.
                                                                    </CommandItem>
                                                                </CommandEmpty>
                                                                <CommandGroup>
                                                                    {availablePrograms.map((program) => (
                                                                        <CommandItem
                                                                            value={program.label}
                                                                            key={program.value}
                                                                            onSelect={() => {
                                                                                form.setValue("program", program.label);
                                                                                form.trigger("program");
                                                                                (document.getElementById(field.name) as HTMLButtonElement)?.click();
                                                                            }}
                                                                        >
                                                                            <Check
                                                                                className={cn(
                                                                                    "mr-2 h-4 w-4",
                                                                                    program.label === field.value
                                                                                        ? "opacity-100"
                                                                                        : "opacity-0"
                                                                                )}
                                                                            />
                                                                            {program.label}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    Pilih program atau ketikkan program bahasa Inggris kamu inginkan.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full text-black bg-yellow-300 hover:bg-yellow-200" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Mengirim...
                                            </>
                                        ) : (
                                            "Kirim Form"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

    );
}