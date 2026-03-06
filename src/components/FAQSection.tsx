import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the minimum deposit to start trading?",
    a: "You can start trading with as little as $10. This allows you to explore the platform and place trades starting from just $1 per trade.",
  },
  {
    q: "How long does it take to withdraw funds?",
    a: "Standard withdrawals are processed within 1-3 business days. Gold and VIP account holders enjoy priority withdrawals processed within 4 hours.",
  },
  {
    q: "Is TradeX regulated and safe?",
    a: "Yes, TradeX is fully regulated and operates under strict financial regulations. We use bank-grade SSL encryption and store all client funds in segregated accounts.",
  },
  {
    q: "What assets can I trade on TradeX?",
    a: "TradeX offers 70+ trading assets including forex pairs, stocks (Apple, Tesla, etc.), cryptocurrencies (Bitcoin, Ethereum), commodities (Gold, Silver), and indices.",
  },
  {
    q: "Can I trade on weekends?",
    a: "Yes! TradeX offers a unique Non-Stop Trading mode that allows you to trade specially selected assets on weekends and holidays, so you never miss an opportunity.",
  },
  {
    q: "Do you offer a demo account?",
    a: "Absolutely. Every new user gets a free demo account loaded with $10,000 in virtual funds. Practice your strategies risk-free before trading with real money.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers. Can't find what you're looking for? Contact our 24/7 support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card px-5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-sm font-heading font-semibold hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
