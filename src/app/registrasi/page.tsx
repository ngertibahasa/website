"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
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

// --- Form Schema for Registration ---
const FormSchema = z.object({
    nama: z.string().min(2, {
        message: "Nama harus berisi minimal 2 karakter.",
    }),
    usia: z.coerce.number().min(5, {
        message: "Usia harus angka dan minimal 5 tahun.",
    }).max(99, {
        message: "Usia tidak boleh lebih dari 99 tahun."
    }),
    whatsapp: z.string().regex(/^(\+62|0)\d{9,13}$/, { // Regex untuk format nomor WA Indonesia
        message: "Nomor WhatsApp tidak valid (contoh: 081234567890 atau +6281234567890).",
    }),
    email: z.string().email({
        message: "Format email tidak valid.",
    }),
    program: z.string().min(1, { // Pastikan Combobox tidak kosong
        message: "Program harus dipilih.",
    }),
    jam: z.string().min(1, { // Pastikan Combobox tidak kosong
        message: "Waktu belajar harus dipilih.",
    }),
    domisili: z.string().min(2, {
        message: "Domisili harus berisi minimal 2 karakter.",
    }),
    source: z.string().min(1, { // Pastikan Combobox tidak kosong
        message: "Bagaimana Anda tahu kami harus dipilih.",
    }),
});

// List of available English programs
const availablePrograms = [
    { label: "General English", value: "General English" },
    { label: "Conversation Class", value: "Conversation Class" },
    { label: "TOEFL Preparation", value: "TOEFL Preparation" },
    { label: "IELTS Preparation", value: "IELTS Preparation" },
    { label: "Business English", value: "Business English" },
    { label: "English for Kids", value: "English for Kids" },
    { label: "Lainnya", value: "Lainnya" },
];

// List of available study times
const availableTimes = [
    { label: "Pagi (08:00 - 12:00)", value: "Pagi (08:00 - 12:00)" },
    { label: "Siang (13:00 - 17:00)", value: "Siang (13:00 - 17:00)" },
    { label: "Malam (18:00 - 21:00)", value: "Malam (18:00 - 21:00)" },
    { label: "Fleksibel", value: "Fleksibel" },
];

// List of sources
const howDidYouKnowUs = [
    { label: "Media Sosial", value: "Media Sosial" },
    { label: "Google / Pencarian Online", value: "Google / Pencarian Online" },
    { label: "Rekomendasi Teman / Keluarga", value: "Rekomendasi Teman / Keluarga" },
    { label: "Iklan", value: "Iklan" },
    { label: "Event / Pameran", value: "Event / Pameran" },
    { label: "Lainnya", value: "Lainnya" },
];


export default function Registrasi() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            nama: "",
            usia: 0,
            whatsapp: "",
            email: "",
            program: "",
            jam: "",
            domisili: "",
            source: "",
        },
    });

    // State untuk mengelola status loading
    const [isLoading, setIsLoading] = React.useState(false);

    // --- Fungsi onSubmit untuk Mengirim Data ke Backend ---
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true); // Set loading ke true saat proses dimulai
        try {
            // Menggunakan environment variable atau fallback URL
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://save-leads-neon.vercel.app";

            const response = await fetch(`${backendUrl}/api/registrasi`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Nama: data.nama,
                    Usia: data.usia,
                    NoWA: data.whatsapp,
                    Email: data.email,
                    Program: data.program, // Combobox value
                    Jam: data.jam, // Combobox value
                    Domisili: data.domisili, // Mapped 'domisili' to 'Note'
                    TauNBdariMana: data.source, // Combobox value
                }),
            });

            const result = await response.json();

            if (response.ok && result.status === "success") {
                toast.success("Permintaan registrasi berhasil dikirim!", {
                    description: "Anda akan diarahkan ke WhatsApp kami untuk diskusi lebih lanjut.",
                    duration: 3000,
                    onAutoClose: () => {
                        const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
                        const message = encodeURIComponent(`Halo, saya ${data.nama} (Usia: ${data.usia}, Program diminati: ${data.program}). Saya ingin registrasi lebih lanjut mengenai kursus bahasa Inggris.`);
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                    },
                    action: {
                        label: 'Ke WhatsApp',
                        onClick: () => {
                            const phoneNumber = "6281234567890";
                            const message = encodeURIComponent(`Halo, saya ${data.nama} (Usia: ${data.usia}, Program diminati: ${data.program}). Saya ingin registrasi lebih lanjut mengenai kursus bahasa Inggris.`);
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                            window.open(whatsappUrl, '_blank');
                        },
                    },
                });
                form.reset();
            } else {
                toast.error("Gagal mengirim permintaan registrasi.", {
                    description: result.message || "Terjadi kesalahan pada server kami.",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Terjadi masalah koneksi atau server.", {
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
            <div className="flex flex-col gap-5 px-5 py-20 md:pt-32 min-h-screen bg-gray-50">
                <div className="w-full flex mb-8 md:mb-0">
                    <div className="text-center max-w-lg mx-auto md:text-lleft">
                        <Image alt="registrasi" src="/images/benefit-2.webp" className="mx-auto" width={300} height={300} />
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Daftar Sekarang dan Mulai Petualangan Bahasa Inggrismu!
                        </h1>
                        <p className="text-md text-gray-600">
                            Isi formulir singkat di bawah ini untuk mendaftar kursus bahasa Inggris kami.
                        </p>
                    </div>
                </div>
                <div className="flex h-full w-full max-w-2xl mx-auto items-center justify-center px-4 z-20">
                    <Card className="w-full shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-blue-500">Registrasi Sekarang</CardTitle>
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
                                                <FormLabel>Usia</FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="Contoh: 25" {...field} value={field.value === 0 ? 0 : field.value} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field WhatsApp */}
                                    <FormField
                                        control={form.control}
                                        name="whatsapp"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nomor WhatsApp</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Contoh: 081234567890" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Masukkan nomor WhatsApp aktif Anda (e.g., 081234567890 atau +6281234567890).
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field Email */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Alamat Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Contoh: nama@example.com" {...field} />
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
                                                                    : "Pilih program..."}
                                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Cari program..." />
                                                            <CommandList>
                                                                <CommandEmpty>Tidak ada program ditemukan.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {availablePrograms.map((program) => (
                                                                        <CommandItem
                                                                            value={program.label}
                                                                            key={program.value}
                                                                            onSelect={() => {
                                                                                form.setValue("program", program.label);
                                                                                form.trigger("program"); // Trigger validation on change
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
                                                    Pilih program bahasa Inggris yang paling Anda minati.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field Jam (Combobox) */}
                                    <FormField
                                        control={form.control}
                                        name="jam"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Waktu Belajar yang Diminati</FormLabel>
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
                                                                    ? availableTimes.find(
                                                                        (time) => time.label === field.value
                                                                    )?.label
                                                                    : "Pilih waktu..."}
                                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Cari waktu..." />
                                                            <CommandList>
                                                                <CommandEmpty>Tidak ada waktu ditemukan.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {availableTimes.map((time) => (
                                                                        <CommandItem
                                                                            value={time.label}
                                                                            key={time.value}
                                                                            onSelect={() => {
                                                                                form.setValue("jam", time.label);
                                                                                form.trigger("jam"); // Trigger validation on change
                                                                            }}
                                                                        >
                                                                            <Check
                                                                                className={cn(
                                                                                    "mr-2 h-4 w-4",
                                                                                    time.label === field.value
                                                                                        ? "opacity-100"
                                                                                        : "opacity-0"
                                                                                )}
                                                                            />
                                                                            {time.label}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    Pilih rentang waktu belajar yang paling sesuai untuk Anda.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field Domisili / Note (Textarea) */}
                                    <FormField
                                        control={form.control}
                                        name="domisili"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Domisili</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Contoh: Surabaya, Jawa Timur."
                                                        className="resize-y"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Masukkan domisili kamu.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Field TauNBdariMana (Combobox) */}
                                    <FormField
                                        control={form.control}
                                        name="source"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Bagaimana Anda tahu kami?</FormLabel>
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
                                                                    ? howDidYouKnowUs.find(
                                                                        (source) => source.label === field.value
                                                                    )?.label
                                                                    : "Pilih sumber informasi..."}
                                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Cari sumber..." />
                                                            <CommandList>
                                                                <CommandEmpty>Tidak ada sumber ditemukan.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {howDidYouKnowUs.map((source) => (
                                                                        <CommandItem
                                                                            value={source.label}
                                                                            key={source.value}
                                                                            onSelect={() => {
                                                                                form.setValue("source", source.label);
                                                                                form.trigger("source"); // Trigger validation on change
                                                                            }}
                                                                        >
                                                                            <Check
                                                                                className={cn(
                                                                                    "mr-2 h-4 w-4",
                                                                                    source.label === field.value
                                                                                        ? "opacity-100"
                                                                                        : "opacity-0"
                                                                                )}
                                                                            />
                                                                            {source.label}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    Bantu kami mengetahui dari mana Anda mendapatkan informasi tentang kami.
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
        </section >
    );
}