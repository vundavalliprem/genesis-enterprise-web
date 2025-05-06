
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormState(initialFormState);
      setIsSubmitting(false);
    }, 1500);
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

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-brand-blue" />,
      title: "Office Location",
      details: "123 Tech Park, Silicon Valley, CA 94043, USA"
    },
    {
      icon: <Phone className="h-5 w-5 text-brand-blue" />,
      title: "Phone Number",
      details: "+1 (415) 555-1234"
    },
    {
      icon: <Mail className="h-5 w-5 text-brand-blue" />,
      title: "Email Address",
      details: "info@gorantla-infotech.com"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
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
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
            Get in Touch
          </h3>
          
          <p className="text-gray-600 mb-8">
            Have questions about our services or want to discuss how we can help your business? Reach out to us through any of these channels or fill out the contact form.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-medium">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
