
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: ''
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          first_name: formState.firstName,
          last_name: formState.lastName,
          email: formState.email,
          phone: formState.phone || null,
          company: formState.company || null,
          message: formState.message
        }]);
      
      if (error) throw error;
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormState(initialFormState);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      <motion.h3 variants={itemVariants} className="text-2xl font-heading font-bold text-gray-900 mb-6">
        Send Us a Message
      </motion.h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <motion.div variants={itemVariants}>
            <Label htmlFor="firstName" className="text-gray-700 mb-1.5 block">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-blue focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="lastName" className="text-gray-700 mb-1.5 block">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-blue focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <motion.div variants={itemVariants}>
            <Label htmlFor="email" className="text-gray-700 mb-1.5 block">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-blue focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="phone" className="text-gray-700 mb-1.5 block">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-blue focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mb-6">
          <Label htmlFor="company" className="text-gray-700 mb-1.5 block">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-blue focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <Label htmlFor="message" className="text-gray-700 mb-1.5 block">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-blue focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all min-h-[150px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white py-3 rounded-md font-medium transition-colors duration-300"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
