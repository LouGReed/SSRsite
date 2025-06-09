'use client';
import React, { FormEvent, useState } from 'react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset(); // Reset form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Good Morning Lou! Here is your daily survey
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Binary Questions Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Quick Yes/No Questions</h2>
          
          {/* Sleep & Activity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Satisfactory sleep?</span>
                <select name="sleepQuality" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you sleep alone?</span>
                <select name="sleepAlone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you exercise?</span>
                <select name="exercise" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you work?</span>
                <select name="work" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you socialize?</span>
                <select name="socialize" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you vape?</span>
                <select name="vape" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you drink alcohol?</span>
                <select name="alcohol" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Did you take Lyrica?</span>
                <select name="lyrica" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
          </div>

          {/* Supplements Section */}
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-3">Supplements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block">
                  <span className="text-gray-700">Took Creatine?</span>
                  <select name="tookCreatine" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>

              <div className="space-y-2">
                <label className="block">
                  <span className="text-gray-700">Took Liver?</span>
                  <select name="tookLiver" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>

              <div className="space-y-2">
                <label className="block">
                  <span className="text-gray-700">Took B Vitamin?</span>
                  <select name="tookBVitamin" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Numeric Inputs Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Numeric Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Day in menstrual cycle</span>
                <input 
                  type="number" 
                  min="1" 
                  max="31"
                  name="dayInMenstrualCycle"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Enter day (1-31)"
                />
              </label>
            </div>

            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-700">Hours in flow state yesterday</span>
                <input 
                  type="number" 
                  min="0" 
                  max="24" 
                  step="0.5"
                  name="hoursInFlowStateYesterday"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Enter hours (0-24)"
                />
              </label>
            </div>
          </div>
        </section>

        {/* Scale Ratings Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Scale Ratings (1-5)</h2>
          
          {/* Locked In Level */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Locked In Level</span>
              <p className="text-sm text-gray-500 mb-2">
                1: No consistent attempts
                2: Attempted but couldn't sustain
                3: Moderate work, sustained focus
                4: Locked in and crushed
                5: On fire, locked tf in
              </p>
              <select name="lockedInLevel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - No consistent attempts</option>
                <option value="2">2 - Attempted but couldn't sustain</option>
                <option value="3">3 - Moderate work, sustained focus</option>
                <option value="4">4 - Locked in and crushed</option>
                <option value="5">5 - On fire, locked tf in</option>
              </select>
            </label>
          </div>

          {/* Social Fluidity */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Social Fluidity</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Social nerve offline, avoiding people
                2: Tough to connect, irritated with close ones
                3: Doing okay, enjoying socializing
                4: Connecting and seeking interaction
                5: On fire, social as fuck, stacking plans
              </p>
              <select name="socialFluidity" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - Social nerve offline</option>
                <option value="2">2 - Tough to connect</option>
                <option value="3">3 - Doing okay</option>
                <option value="4">4 - Actively connecting</option>
                <option value="5">5 - Social fire</option>
              </select>
            </label>
          </div>

          {/* Stalk Vitality */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Stalk Vitality</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Didn't rise from bed<br/>
                2: Frequently wanted to lie down<br/>
                3: Neutral state<br/>
                4: Sustained uprightness all day<br/>
                5: Peak rontoms rush hour
              </p>
              <select name="stalkVitality" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - Maximum floppiness</option>
                <option value="2">2 - Seeking support</option>
                <option value="3">3 - Neutral state</option>
                <option value="4">4 - Sustained uprightness</option>
                <option value="5">5 - Peak vitality</option>
              </select>
            </label>
          </div>

          {/* Stress Level */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Stress Level</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Overwhelming, paralyzing stress<br/>
                2: High stress, affecting function<br/>
                3: Manageable stress level<br/>
                4: Minimal stress, feeling calm<br/>
                5: Optimal stress - energized but calm
              </p>
              <select name="stressLevel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - Overwhelming stress</option>
                <option value="2">2 - High stress</option>
                <option value="3">3 - Manageable</option>
                <option value="4">4 - Minimal stress</option>
                <option value="5">5 - Optimal stress</option>
              </select>
            </label>
          </div>

          {/* Energy/Metabolism */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Energy/Metabolism</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Completely depleted<br/>
                2: Low energy, struggling<br/>
                3: Stable but not optimal<br/>
                4: Good energy levels<br/>
                5: Peak energy and metabolism
              </p>
              <select name="energyMetabolism" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - Depleted</option>
                <option value="2">2 - Low energy</option>
                <option value="3">3 - Stable</option>
                <option value="4">4 - Good energy</option>
                <option value="5">5 - Peak energy</option>
              </select>
            </label>
          </div>

          {/* Emotional Capability */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Emotional Capability</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Emotionally numb/disconnected<br/>
                2: Limited emotional range<br/>
                3: Basic emotional engagement<br/>
                4: Strong emotional awareness<br/>
                5: Full emotional presence and processing
              </p>
              <select name="emotionalCapability" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - Disconnected</option>
                <option value="2">2 - Limited range</option>
                <option value="3">3 - Basic engagement</option>
                <option value="4">4 - Strong awareness</option>
                <option value="5">5 - Full presence</option>
              </select>
            </label>
          </div>

          {/* Music Reinforcement */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Music Reinforcement</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Music had no impact<br/>
                2: Slight emotional response<br/>
                3: Moderate enjoyment<br/>
                4: Strong emotional connection<br/>
                5: Intense reinforcement/euphoria
              </p>
              <select name="musicReinforcement" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - No impact</option>
                <option value="2">2 - Slight response</option>
                <option value="3">3 - Moderate</option>
                <option value="4">4 - Strong connection</option>
                <option value="5">5 - Intense reinforcement</option>
              </select>
            </label>
          </div>

          {/* Anxiety Level */}
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700 font-medium">Anxiety Level</span>
              <p className="text-sm text-gray-500 mb-2">
                1: Severe, debilitating anxiety<br/>
                2: High anxiety, affecting function<br/>
                3: Moderate, manageable anxiety<br/>
                4: Low background anxiety<br/>
                5: Calm and centered
              </p>
              <select name="anxietyLevel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select...</option>
                <option value="1">1 - Severe anxiety</option>
                <option value="2">2 - High anxiety</option>
                <option value="3">3 - Moderate</option>
                <option value="4">4 - Low anxiety</option>
                <option value="5">5 - Calm centered</option>
              </select>
            </label>
          </div>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Daily Survey'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-600 text-center">Survey submitted successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center">Error submitting survey. Please try again.</p>
        )}
      </form>
    </main>
  )
} 