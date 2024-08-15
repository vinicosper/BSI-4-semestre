class CPU:
    def __init__(self, ram, es):
        self.ram = ram
        self.es = es
        self.pc = 0
    
    def run(self, endereco):
        self.pc = endereco
        a = self.ram.read(self.pc)
        b = self.ram.read(self.pc + 1)
        c = 1
        while a <= b:
            self.ram.write(a,c)
            self.es.output(f"{a} <- {c}\n")
            c = c + 1
            a += 1
class CacheSimples:
    def __init(self, kc, ram):
      self.tam_cache = 2**kc
      self.dados = [0] * self.tam_cache
      self.bloco = -1

    def read(self, endereco):
        bloco_endereco = int( endereco / self.tam_cache)
        if bloco_endereco == self.bloco:
            print('Cache hit')
            pos = endereco - self.bloco * self.tam_cache
            return self.dados[pos]

        else:
            print('Cache miss')

            # cache foi modificada? -> atualizar RAM

            #traz da RAM o bloco contendo o endereco

            #return...


    def write(self, endereco, valor):
        


class RAM:
    def __init__(self, k):
        self.mem = []
        for i in range(2**k):
            self.mem.append(0)

    def read(self, endereco):
        return self.mem[endereco]
    
    def write(self, endereco, valor):
        self.mem[endereco] = valor

    def capacidade(self):
        return len(self.mem)

class IO:
    def __init__(self):
        print('IO criado')

    def output(self, msg):
        print(msg, end='')

    def input(self, prompt):
        return input(prompt)

def main():
    es=IO()
    ram = RAM(7)
    cpu = CPU(ram, es)

    ram.write(10, 100)
    ram.write(11, 111)

    cpu.run(10)

    


if __name__ == '__main__':
    main()
